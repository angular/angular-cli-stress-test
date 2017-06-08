/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service801Service } from './service-801.service';

describe('Service801Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service801Service]
    });
  });

  it('should ...', inject([Service801Service], (service: Service801Service) => {
    expect(service).toBeTruthy();
  }));
});
