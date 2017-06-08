/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service771Service } from './service-771.service';

describe('Service771Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service771Service]
    });
  });

  it('should ...', inject([Service771Service], (service: Service771Service) => {
    expect(service).toBeTruthy();
  }));
});
