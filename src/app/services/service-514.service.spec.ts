/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service514Service } from './service-514.service';

describe('Service514Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service514Service]
    });
  });

  it('should ...', inject([Service514Service], (service: Service514Service) => {
    expect(service).toBeTruthy();
  }));
});
