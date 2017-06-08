/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service306Service } from './service-306.service';

describe('Service306Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service306Service]
    });
  });

  it('should ...', inject([Service306Service], (service: Service306Service) => {
    expect(service).toBeTruthy();
  }));
});
