/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service747Service } from './service-747.service';

describe('Service747Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service747Service]
    });
  });

  it('should ...', inject([Service747Service], (service: Service747Service) => {
    expect(service).toBeTruthy();
  }));
});
