/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service974Service } from './service-974.service';

describe('Service974Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service974Service]
    });
  });

  it('should ...', inject([Service974Service], (service: Service974Service) => {
    expect(service).toBeTruthy();
  }));
});
