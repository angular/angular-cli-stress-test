/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service20Service } from './service-20.service';

describe('Service20Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service20Service]
    });
  });

  it('should ...', inject([Service20Service], (service: Service20Service) => {
    expect(service).toBeTruthy();
  }));
});
