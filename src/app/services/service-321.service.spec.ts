/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service321Service } from './service-321.service';

describe('Service321Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service321Service]
    });
  });

  it('should ...', inject([Service321Service], (service: Service321Service) => {
    expect(service).toBeTruthy();
  }));
});
