/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service400Service } from './service-400.service';

describe('Service400Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service400Service]
    });
  });

  it('should ...', inject([Service400Service], (service: Service400Service) => {
    expect(service).toBeTruthy();
  }));
});
