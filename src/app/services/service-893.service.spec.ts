/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service893Service } from './service-893.service';

describe('Service893Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service893Service]
    });
  });

  it('should ...', inject([Service893Service], (service: Service893Service) => {
    expect(service).toBeTruthy();
  }));
});
