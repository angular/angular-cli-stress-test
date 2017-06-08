/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service932Service } from './service-932.service';

describe('Service932Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service932Service]
    });
  });

  it('should ...', inject([Service932Service], (service: Service932Service) => {
    expect(service).toBeTruthy();
  }));
});
