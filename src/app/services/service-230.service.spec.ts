/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service230Service } from './service-230.service';

describe('Service230Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service230Service]
    });
  });

  it('should ...', inject([Service230Service], (service: Service230Service) => {
    expect(service).toBeTruthy();
  }));
});
