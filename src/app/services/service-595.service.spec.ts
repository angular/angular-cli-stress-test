/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service595Service } from './service-595.service';

describe('Service595Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service595Service]
    });
  });

  it('should ...', inject([Service595Service], (service: Service595Service) => {
    expect(service).toBeTruthy();
  }));
});
