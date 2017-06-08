/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service111Service } from './service-111.service';

describe('Service111Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service111Service]
    });
  });

  it('should ...', inject([Service111Service], (service: Service111Service) => {
    expect(service).toBeTruthy();
  }));
});
