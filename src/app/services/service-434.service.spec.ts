/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service434Service } from './service-434.service';

describe('Service434Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service434Service]
    });
  });

  it('should ...', inject([Service434Service], (service: Service434Service) => {
    expect(service).toBeTruthy();
  }));
});
