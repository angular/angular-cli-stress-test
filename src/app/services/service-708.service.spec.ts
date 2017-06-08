/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service708Service } from './service-708.service';

describe('Service708Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service708Service]
    });
  });

  it('should ...', inject([Service708Service], (service: Service708Service) => {
    expect(service).toBeTruthy();
  }));
});
