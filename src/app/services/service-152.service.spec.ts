/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service152Service } from './service-152.service';

describe('Service152Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service152Service]
    });
  });

  it('should ...', inject([Service152Service], (service: Service152Service) => {
    expect(service).toBeTruthy();
  }));
});
