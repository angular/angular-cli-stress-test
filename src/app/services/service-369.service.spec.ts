/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service369Service } from './service-369.service';

describe('Service369Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service369Service]
    });
  });

  it('should ...', inject([Service369Service], (service: Service369Service) => {
    expect(service).toBeTruthy();
  }));
});
