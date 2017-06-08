/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service670Service } from './service-670.service';

describe('Service670Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service670Service]
    });
  });

  it('should ...', inject([Service670Service], (service: Service670Service) => {
    expect(service).toBeTruthy();
  }));
});
