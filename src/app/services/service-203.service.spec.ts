/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service203Service } from './service-203.service';

describe('Service203Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service203Service]
    });
  });

  it('should ...', inject([Service203Service], (service: Service203Service) => {
    expect(service).toBeTruthy();
  }));
});
