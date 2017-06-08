/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service62Service } from './service-62.service';

describe('Service62Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service62Service]
    });
  });

  it('should ...', inject([Service62Service], (service: Service62Service) => {
    expect(service).toBeTruthy();
  }));
});
