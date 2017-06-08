/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service336Service } from './service-336.service';

describe('Service336Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service336Service]
    });
  });

  it('should ...', inject([Service336Service], (service: Service336Service) => {
    expect(service).toBeTruthy();
  }));
});
