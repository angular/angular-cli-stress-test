/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service591Service } from './service-591.service';

describe('Service591Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service591Service]
    });
  });

  it('should ...', inject([Service591Service], (service: Service591Service) => {
    expect(service).toBeTruthy();
  }));
});
