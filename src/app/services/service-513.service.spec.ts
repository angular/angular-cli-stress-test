/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service513Service } from './service-513.service';

describe('Service513Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service513Service]
    });
  });

  it('should ...', inject([Service513Service], (service: Service513Service) => {
    expect(service).toBeTruthy();
  }));
});
