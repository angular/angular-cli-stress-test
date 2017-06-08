/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service66Service } from './service-66.service';

describe('Service66Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service66Service]
    });
  });

  it('should ...', inject([Service66Service], (service: Service66Service) => {
    expect(service).toBeTruthy();
  }));
});
