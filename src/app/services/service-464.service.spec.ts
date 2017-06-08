/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service464Service } from './service-464.service';

describe('Service464Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service464Service]
    });
  });

  it('should ...', inject([Service464Service], (service: Service464Service) => {
    expect(service).toBeTruthy();
  }));
});
