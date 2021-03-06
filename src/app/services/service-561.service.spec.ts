/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service561Service } from './service-561.service';

describe('Service561Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service561Service]
    });
  });

  it('should ...', inject([Service561Service], (service: Service561Service) => {
    expect(service).toBeTruthy();
  }));
});
