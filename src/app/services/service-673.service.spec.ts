/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service673Service } from './service-673.service';

describe('Service673Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service673Service]
    });
  });

  it('should ...', inject([Service673Service], (service: Service673Service) => {
    expect(service).toBeTruthy();
  }));
});
