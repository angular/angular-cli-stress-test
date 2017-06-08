/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service217Service } from './service-217.service';

describe('Service217Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service217Service]
    });
  });

  it('should ...', inject([Service217Service], (service: Service217Service) => {
    expect(service).toBeTruthy();
  }));
});
