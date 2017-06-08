/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service113Service } from './service-113.service';

describe('Service113Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service113Service]
    });
  });

  it('should ...', inject([Service113Service], (service: Service113Service) => {
    expect(service).toBeTruthy();
  }));
});
