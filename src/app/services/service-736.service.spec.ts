/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service736Service } from './service-736.service';

describe('Service736Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service736Service]
    });
  });

  it('should ...', inject([Service736Service], (service: Service736Service) => {
    expect(service).toBeTruthy();
  }));
});
