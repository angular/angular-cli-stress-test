/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service860Service } from './service-860.service';

describe('Service860Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service860Service]
    });
  });

  it('should ...', inject([Service860Service], (service: Service860Service) => {
    expect(service).toBeTruthy();
  }));
});
