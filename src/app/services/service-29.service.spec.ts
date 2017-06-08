/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service29Service } from './service-29.service';

describe('Service29Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service29Service]
    });
  });

  it('should ...', inject([Service29Service], (service: Service29Service) => {
    expect(service).toBeTruthy();
  }));
});
