/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service195Service } from './service-195.service';

describe('Service195Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service195Service]
    });
  });

  it('should ...', inject([Service195Service], (service: Service195Service) => {
    expect(service).toBeTruthy();
  }));
});
