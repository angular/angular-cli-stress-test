/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service590Service } from './service-590.service';

describe('Service590Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service590Service]
    });
  });

  it('should ...', inject([Service590Service], (service: Service590Service) => {
    expect(service).toBeTruthy();
  }));
});
