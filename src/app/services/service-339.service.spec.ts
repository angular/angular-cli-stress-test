/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service339Service } from './service-339.service';

describe('Service339Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service339Service]
    });
  });

  it('should ...', inject([Service339Service], (service: Service339Service) => {
    expect(service).toBeTruthy();
  }));
});
