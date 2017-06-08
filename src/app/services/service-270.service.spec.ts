/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service270Service } from './service-270.service';

describe('Service270Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service270Service]
    });
  });

  it('should ...', inject([Service270Service], (service: Service270Service) => {
    expect(service).toBeTruthy();
  }));
});
