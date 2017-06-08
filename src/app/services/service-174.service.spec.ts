/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service174Service } from './service-174.service';

describe('Service174Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service174Service]
    });
  });

  it('should ...', inject([Service174Service], (service: Service174Service) => {
    expect(service).toBeTruthy();
  }));
});
