/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service664Service } from './service-664.service';

describe('Service664Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service664Service]
    });
  });

  it('should ...', inject([Service664Service], (service: Service664Service) => {
    expect(service).toBeTruthy();
  }));
});
