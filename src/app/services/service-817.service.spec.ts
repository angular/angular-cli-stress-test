/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service817Service } from './service-817.service';

describe('Service817Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service817Service]
    });
  });

  it('should ...', inject([Service817Service], (service: Service817Service) => {
    expect(service).toBeTruthy();
  }));
});
