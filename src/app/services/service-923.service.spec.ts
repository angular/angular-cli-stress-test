/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service923Service } from './service-923.service';

describe('Service923Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service923Service]
    });
  });

  it('should ...', inject([Service923Service], (service: Service923Service) => {
    expect(service).toBeTruthy();
  }));
});
