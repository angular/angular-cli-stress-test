/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service782Service } from './service-782.service';

describe('Service782Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service782Service]
    });
  });

  it('should ...', inject([Service782Service], (service: Service782Service) => {
    expect(service).toBeTruthy();
  }));
});
