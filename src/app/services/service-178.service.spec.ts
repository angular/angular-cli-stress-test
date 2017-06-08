/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service178Service } from './service-178.service';

describe('Service178Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service178Service]
    });
  });

  it('should ...', inject([Service178Service], (service: Service178Service) => {
    expect(service).toBeTruthy();
  }));
});
