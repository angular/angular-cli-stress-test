/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service884Service } from './service-884.service';

describe('Service884Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service884Service]
    });
  });

  it('should ...', inject([Service884Service], (service: Service884Service) => {
    expect(service).toBeTruthy();
  }));
});
