/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service612Service } from './service-612.service';

describe('Service612Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service612Service]
    });
  });

  it('should ...', inject([Service612Service], (service: Service612Service) => {
    expect(service).toBeTruthy();
  }));
});
