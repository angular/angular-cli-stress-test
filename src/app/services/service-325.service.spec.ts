/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service325Service } from './service-325.service';

describe('Service325Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service325Service]
    });
  });

  it('should ...', inject([Service325Service], (service: Service325Service) => {
    expect(service).toBeTruthy();
  }));
});
