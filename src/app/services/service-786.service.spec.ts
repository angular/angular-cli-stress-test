/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service786Service } from './service-786.service';

describe('Service786Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service786Service]
    });
  });

  it('should ...', inject([Service786Service], (service: Service786Service) => {
    expect(service).toBeTruthy();
  }));
});
