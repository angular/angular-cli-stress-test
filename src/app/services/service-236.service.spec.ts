/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service236Service } from './service-236.service';

describe('Service236Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service236Service]
    });
  });

  it('should ...', inject([Service236Service], (service: Service236Service) => {
    expect(service).toBeTruthy();
  }));
});
