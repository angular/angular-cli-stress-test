/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service472Service } from './service-472.service';

describe('Service472Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service472Service]
    });
  });

  it('should ...', inject([Service472Service], (service: Service472Service) => {
    expect(service).toBeTruthy();
  }));
});
