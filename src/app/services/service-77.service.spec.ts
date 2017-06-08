/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service77Service } from './service-77.service';

describe('Service77Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service77Service]
    });
  });

  it('should ...', inject([Service77Service], (service: Service77Service) => {
    expect(service).toBeTruthy();
  }));
});
