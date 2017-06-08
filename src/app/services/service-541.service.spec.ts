/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service541Service } from './service-541.service';

describe('Service541Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service541Service]
    });
  });

  it('should ...', inject([Service541Service], (service: Service541Service) => {
    expect(service).toBeTruthy();
  }));
});
