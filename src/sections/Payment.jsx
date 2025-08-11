import React, { useState, useEffect } from 'react';

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentStep, setPaymentStep] = useState('select'); // select, details, processing, success
  const [amount, setAmount] = useState(250000);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    holderName: '',
    bankAccount: '',
    phoneNumber: '',
    pin: ''
  });
  const [processingProgress, setProcessingProgress] = useState(0);
  const [errors, setErrors] = useState({});

  const paymentMethods = [
    {
      id: 'bank-transfer',
      name: 'Transfer Bank',
      description: 'Transfer melalui rekening bank',
      fee: 0,
      estimatedTime: '1-2 menit',
      banks: ['BCA', 'BNI', 'BRI', 'Mandiri', 'CIMB Niaga']
    },
    {
      id: 'ewallet',
      name: 'E-Wallet',
      description: 'Bayar dengan dompet digital',
      fee: 1500,
      estimatedTime: 'Instan',
      providers: ['GoPay', 'OVO', 'DANA', 'LinkAja', 'ShopeePay']
    },
    {
      id: 'credit-card',
      name: 'Kartu Kredit',
      description: 'Visa, Mastercard, JCB',
      fee: 2500,
      estimatedTime: 'Instan',
      cards: ['Visa', 'Mastercard', 'JCB', 'American Express']
    },
    {
      id: 'qris',
      name: 'QRIS',
      description: 'Scan QR dengan aplikasi bank',
      fee: 0,
      estimatedTime: 'Instan',
      compatible: 'Semua aplikasi bank dan e-wallet'
    }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Validate amount
    if (amount < 10000) {
      newErrors.amount = 'Jumlah minimal Rp 10.000';
    }
    if (amount > 10000000) {
      newErrors.amount = 'Jumlah maksimal Rp 10.000.000';
    }
    
    if (selectedMethod?.id === 'credit-card') {
      if (!formData.cardNumber || formData.cardNumber.length < 16) {
        newErrors.cardNumber = 'Nomor kartu harus 16 digit';
      }
      if (!formData.expiryDate) {
        newErrors.expiryDate = 'Tanggal kadaluarsa wajib diisi';
      }
      if (!formData.cvv || formData.cvv.length < 3) {
        newErrors.cvv = 'CVV harus 3 digit';
      }
      if (!formData.holderName) {
        newErrors.holderName = 'Nama pemegang kartu wajib diisi';
      }
    }
    
    if (selectedMethod?.id === 'bank-transfer') {
      if (!formData.bankAccount) {
        newErrors.bankAccount = 'Pilih bank tujuan';
      }
    }
    
    if (selectedMethod?.id === 'ewallet') {
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = 'Nomor telepon wajib diisi';
      }
      if (!formData.pin) {
        newErrors.pin = 'PIN wajib diisi';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const processPayment = () => {
    if (!validateForm()) return;
    
    setPaymentStep('processing');
    setProcessingProgress(0);
    
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setPaymentStep('success'), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const resetPayment = () => {
    setSelectedMethod(null);
    setPaymentStep('select');
    setProcessingProgress(0);
    setIsCustomAmount(false);
    setCustomAmount('');
    setFormData({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      holderName: '',
      bankAccount: '',
      phoneNumber: '',
      pin: ''
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Checkout Pembayaran</h1>
          <p className="text-gray-600">Pilih metode pembayaran yang diinginkan</p>
        </div>

        {/* Payment Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Ringkasan Pembayaran</h2>
          
          {/* Amount Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Jumlah Pembayaran
            </label>
            
            {/* Preset Amounts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {[50000, 100000, 250000, 500000].map((presetAmount) => (
                <button
                  key={presetAmount}
                  onClick={() => {
                    setAmount(presetAmount);
                    setIsCustomAmount(false);
                    setCustomAmount('');
                  }}
                  className={`p-3 text-center rounded-lg border-2 transition-all ${
                    amount === presetAmount && !isCustomAmount
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="text-sm font-semibold">
                    {formatCurrency(presetAmount)}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Custom Amount */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setIsCustomAmount(true);
                  setCustomAmount(amount.toString());
                }}
                className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                  isCustomAmount
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <span className="text-sm font-medium">Jumlah Custom</span>
              </button>
              
              {isCustomAmount && (
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    Rp
                  </span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setCustomAmount(value);
                      if (value) {
                        setAmount(parseInt(value));
                      }
                    }}
                    placeholder="0"
                    className="w-full pl-12 pr-4 py-3 border-2 border-blue-500 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-blue-200"
                    autoFocus
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    Minimal Rp 10.000 - Maksimal Rp 10.000.000
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2 text-sm border-t pt-4">
            <div className="flex justify-between">
              <span>Jumlah Pembayaran</span>
              <span>{formatCurrency(amount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Admin</span>
              <span>{selectedMethod ? formatCurrency(selectedMethod.fee) : '-'}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Bayar</span>
              <span className="text-blue-600">
                {formatCurrency(amount + (selectedMethod?.fee || 0))}
              </span>
            </div>
          </div>
        </div>

        {paymentStep === 'select' && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Pilih Metode Pembayaran</h2>
            <div className="space-y-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => {
                    setSelectedMethod(method);
                    setPaymentStep('details');
                  }}
                  className="border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">
                          {method.name}
                        </h3>
                        <p className="text-sm text-gray-600">{method.description}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-green-600">
                            Biaya: {method.fee === 0 ? 'Gratis' : formatCurrency(method.fee)}
                          </span>
                          <span className="text-xs text-blue-600">
                            ⏱️ {method.estimatedTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-500">
                      →
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {paymentStep === 'details' && selectedMethod && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setPaymentStep('select')}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ← Kembali
                </button>
                <div className="text-2xl">{selectedMethod.icon}</div>
                <h2 className="text-xl font-semibold">{selectedMethod.name}</h2>
              </div>
            </div>

            <div className="space-y-6">
              {selectedMethod.id === 'credit-card' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Kartu Kredit
                    </label>
                    <input
                      type="text"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({...formData, cardNumber: e.target.value.replace(/\D/g, '').slice(0, 16)})}
                      placeholder="1234 5678 9012 3456"
                      className={`w-full p-3 border-2 rounded-lg ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Kadaluarsa
                      </label>
                      <input
                        type="text"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                        placeholder="MM/YY"
                        className={`w-full p-3 border-2 rounded-lg ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none`}
                      />
                      {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="password"
                        value={formData.cvv}
                        onChange={(e) => setFormData({...formData, cvv: e.target.value.replace(/\D/g, '').slice(0, 3)})}
                        placeholder="123"
                        className={`w-full p-3 border-2 rounded-lg ${errors.cvv ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none`}
                      />
                      {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Pemegang Kartu
                    </label>
                    <input
                      type="text"
                      value={formData.holderName}
                      onChange={(e) => setFormData({...formData, holderName: e.target.value})}
                      placeholder="John Doe"
                      className={`w-full p-3 border-2 rounded-lg ${errors.holderName ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none`}
                    />
                    {errors.holderName && <p className="text-red-500 text-sm mt-1">{errors.holderName}</p>}
                  </div>
                </>
              )}

              {selectedMethod.id === 'bank-transfer' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pilih Bank Tujuan
                    </label>
                    <select
                      value={formData.bankAccount}
                      onChange={(e) => setFormData({...formData, bankAccount: e.target.value})}
                      className={`w-full p-3 border-2 rounded-lg ${errors.bankAccount ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none`}
                    >
                      <option value="">Pilih Bank</option>
                      {selectedMethod.banks.map(bank => (
                        <option key={bank} value={bank}>{bank}</option>
                      ))}
                    </select>
                    {errors.bankAccount && <p className="text-red-500 text-sm mt-1">{errors.bankAccount}</p>}
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Informasi Transfer:</h4>
                    <p className="text-sm text-blue-700">
                      Setelah memilih bank, Anda akan mendapatkan nomor rekening tujuan dan kode unik untuk transfer.
                    </p>
                  </div>
                </>
              )}

              {selectedMethod.id === 'ewallet' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      placeholder="08123456789"
                      className={`w-full p-3 border-2 rounded-lg ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none`}
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PIN E-Wallet
                    </label>
                    <input
                      type="password"
                      value={formData.pin}
                      onChange={(e) => setFormData({...formData, pin: e.target.value})}
                      placeholder="Masukkan PIN"
                      className={`w-full p-3 border-2 rounded-lg ${errors.pin ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500 focus:outline-none`}
                    />
                    {errors.pin && <p className="text-red-500 text-sm mt-1">{errors.pin}</p>}
                  </div>
                </>
              )}

              {selectedMethod.id === 'qris' && (
                <div className="text-center">
                  <div className="bg-white border-4 border-gray-300 rounded-2xl p-8 mb-4 inline-block">
                    <div className="text-8xl mb-4">📱</div>
                    <div className="w-48 h-48 bg-black mx-auto mb-4 rounded-lg flex items-center justify-center">
                      <div className="text-white text-xs">QR CODE</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Scan QR code di atas menggunakan aplikasi bank atau e-wallet Anda
                  </p>
                  <p className="text-sm text-gray-500">
                    Setelah scan berhasil, konfirmasi pembayaran di aplikasi Anda
                  </p>
                </div>
              )}

              <button
                onClick={processPayment}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                Bayar {formatCurrency(amount + selectedMethod.fee)}
              </button>
            </div>
          </div>
        )}

        {paymentStep === 'processing' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4 animate-spin">⚡</div>
            <h2 className="text-2xl font-semibold mb-4">Memproses Pembayaran</h2>
            <p className="text-gray-600 mb-6">Mohon tunggu, pembayaran sedang diproses...</p>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${processingProgress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{processingProgress}% selesai</p>
          </div>
        )}

        {paymentStep === 'success' && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Pembayaran Berhasil!</h2>
            <p className="text-gray-600 mb-6">
              Terima kasih! Pembayaran Anda telah berhasil diproses.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>ID Transaksi:</span>
                  <span className="font-mono">TRX-2024-{Date.now().toString().slice(-8)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Metode:</span>
                  <span>{selectedMethod?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Jumlah:</span>
                  <span className="font-semibold">{formatCurrency(amount + selectedMethod?.fee)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-green-600 font-semibold">Berhasil</span>
                </div>
              </div>
            </div>

            <button
              onClick={resetPayment}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Buat Transaksi Baru
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;